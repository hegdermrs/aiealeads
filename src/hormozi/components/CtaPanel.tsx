import HormoziReveal from "./HormoziReveal";
import HormoziWaitlistForm from "./HormoziWaitlistForm";

export default function CtaPanel({
  id,
  idPrefix,
  title,
  body,
  microcopy,
}: {
  id?: string;
  idPrefix: string;
  title: string;
  body: string;
  microcopy: string;
}) {
  return (
    <HormoziReveal delay={100}>
      <div id={id} className="oc-cta-panel scroll-mt-28">
        <div className="oc-cta-panel-glow" aria-hidden="true" />
        <div className="oc-cta-panel-inner">
          <h3 className="oc-cta-panel-title">{title}</h3>
          <p className="oc-cta-panel-body">{body}</p>
          <HormoziWaitlistForm idPrefix={idPrefix} variant="inline" />
          <p className="oc-cta-panel-micro">{microcopy}</p>
        </div>
      </div>
    </HormoziReveal>
  );
}
