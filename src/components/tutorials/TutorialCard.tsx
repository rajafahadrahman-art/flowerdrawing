import Image from "next/image";
import Link from "next/link";
import type { TutorialMeta } from "@/lib/tutorials/types";

type TutorialCardProps = {
  tutorial: TutorialMeta;
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <article className="surface-card overflow-hidden transition duration-200 hover:-translate-y-0.5">
      <Link href={`/flower-drawing/${tutorial.slug}/`} className="block">
        <div className="border-b border-border bg-white p-4">
          <Image
            src={tutorial.featuredImage}
            alt={tutorial.featuredImageAlt}
            title={tutorial.featuredImageTitle}
            width={1448}
            height={1086}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="space-y-3 p-5">
          <h3 className="heading-card">{tutorial.title}</h3>
          <p className="text-muted">{tutorial.excerpt}</p>
          <dl className="flex flex-wrap gap-3 text-sm text-muted">
            <div>
              <dt className="sr-only">Difficulty</dt>
              <dd>{tutorial.difficulty}</dd>
            </div>
            <div aria-hidden="true">·</div>
            <div>
              <dt className="sr-only">Steps</dt>
              <dd>{tutorial.stepCount} steps</dd>
            </div>
            <div aria-hidden="true">·</div>
            <div>
              <dt className="sr-only">Time</dt>
              <dd>{tutorial.estimatedTime}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </article>
  );
}
