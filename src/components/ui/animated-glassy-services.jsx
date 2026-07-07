import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { RippleButton } from '@/components/ui/multi-type-ripple-buttons';

// Adapted from "animated-glassy-pricing" (React Bits prompt):
// converted to JSX, pricing removed, shader scoped to its section
// instead of fixed full-screen, and recolored to the brand palette.

const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Matches --color-brand-bg (#f7f8fb)
const BACKGROUND_COLOR = [0.968, 0.972, 0.984];

const ShaderCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) { console.error('WebGL not supported'); return; }

    const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff,vec2(0.,1.),5.,2.);
        len -= variation(diff,vec2(1.,0.),5.,2.);
        float circle = smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        uv.x *= 1.5; uv.x -= 0.25;
        float mask = 0.0;
        float radius = .35;
        vec2 center = vec2(.5);
        mask += paintCircle(uv,center,radius,.035).r;
        mask += paintCircle(uv,center,radius-.018,.01).r;
        mask += paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        vec3 foregroundColor=vec3(v.x,v.y,.7-v.y*v.x);
        vec3 color=mix(uBackgroundColor,foregroundColor,mask);
        color=mix(color,vec3(1.),paintCircle(uv,center,radius,.003).r);
        gl_FragColor=vec4(color,1.);
      }`;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error('Could not create shader');
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || 'Shader compilation error');
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) throw new Error('Could not create program');
    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(program, 'iTime');
    const iResLoc = gl.getUniformLocation(program, 'iResolution');
    const bgColorLoc = gl.getUniformLocation(program, 'uBackgroundColor');
    gl.uniform3fv(bgColorLoc, new Float32Array(BACKGROUND_COLOR));

    let animationFrameId;
    const render = (time) => {
      gl.uniform1f(iTimeLoc, time * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    const handleResize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight : window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full block z-0" />;
};

export const ServiceCard = ({
  serviceName, description, features, details = [], buttonText, isFeatured = false, href = '#booking'
}) => {
  const [expanded, setExpanded] = useState(false);
  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-white/70 to-white/40 border border-black/10
    ${isFeatured ? 'relative ring-2 ring-blue-500/25 shadow-2xl' : ''}
  `;

  return (
    <div className={cardClasses.trim()}>
      {isFeatured && (
        <div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-brand-blue text-white">
          Most Requested
        </div>
      )}
      <div className="mb-3">
        <h3 className="text-[32px] font-light leading-tight tracking-[-0.02em] text-brand-ink">{serviceName}</h3>
        <p className="text-[15px] text-brand-muted mt-2">{description}</p>
      </div>
      <div className="w-full my-5 h-px bg-[linear-gradient(90deg,transparent,rgba(11,18,32,0.12)_50%,transparent)]"></div>

      {!expanded && (
        <ul className="flex flex-col gap-2 text-[14px] text-brand-ink/90">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon className="text-brand-blue w-4 h-4 shrink-0" /> {feature}
            </li>
          ))}
        </ul>
      )}

      {details.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-4 flex w-full items-center justify-between gap-2 rounded-lg border border-black/10 bg-white/50 px-4 py-2.5 text-[13px] font-semibold text-brand-ink transition-colors duration-200 hover:bg-white/80"
          >
            What&apos;s included
            <ChevronDown
              size={16}
              className={`text-brand-blue transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-4 pt-4">
                  {details.map((d) => (
                    <div key={d.label}>
                      <p className="flex items-center gap-2 text-[13.5px] font-semibold text-brand-ink">
                        <CheckIcon className="text-brand-blue w-3.5 h-3.5 shrink-0" />
                        {d.label}
                      </p>
                      <p className="mt-1 pl-[22px] text-[13px] leading-relaxed text-brand-muted">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      <div className="mt-auto pt-6">
        <RippleButton
          onClick={() => { window.location.hash = href; }}
          className="w-full py-2.5 rounded-xl font-semibold text-[14px] transition bg-brand-blue hover:bg-brand-blue-deep text-white"
        >
          {buttonText}
        </RippleButton>
      </div>
    </div>
  );
};

export const ModernServicesShowcase = ({
  title,
  subtitle,
  services,
  showAnimatedBackground = true,
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {showAnimatedBackground && (
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <ShaderCanvas />
        </div>
      )}
      <div className="relative z-10 w-full px-6 py-28 sm:py-36">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-600 to-blue-500">
            {title}
          </h2>
          <p className="mt-4 text-[16px] md:text-[19px] text-brand-muted max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-center lg:items-stretch w-full max-w-5xl mx-auto">
          {services.map((service) => <ServiceCard key={service.serviceName} {...service} />)}
        </div>
      </div>
    </div>
  );
};
