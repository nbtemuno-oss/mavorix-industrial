import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  cta = true
}: {
  badge: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
  cta?: boolean;
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="py-14 lg:py-20">
        {breadcrumbs ? <div className="mb-8 text-slate-300"><Breadcrumbs items={breadcrumbs} /></div> : null}
        <Badge>{badge}</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        {cta ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/en/contact/">Send Inquiry</Button>
            <Button href="/en/services/" variant="secondary">Explore Services</Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
