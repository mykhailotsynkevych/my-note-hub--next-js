'use client';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

      <div className="absolute left-1/2 top-1/2 w-[min(92vw,42rem)] -translate-x-1/2 -translate-y-1/2">
        <div
          className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_24px_80px_-28px_rgba(15,23,42,0.5)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-[linear-gradient(135deg,#eff6ff_0%,#fffbeb_100%)] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Note Preview
            </p>
            <button
              onClick={close}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 transition hover:border-slate-400 hover:text-slate-800"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-5 py-5 text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;