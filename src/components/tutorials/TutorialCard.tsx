import Image from "next/image";
import Link from "next/link";
import type { TutorialMeta } from "@/lib/tutorials/types";

type TutorialCardProps = {
  tutorial: TutorialMeta;
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <article className="surface-card surface-card--hover overflow-hidden">
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
          <div className="flex flex-wrap gap-2">
            <span className="meta-badge meta-badge--mint">{tutorial.difficulty}</span>
            <span className="meta-badge meta-badge--sky">{tutorial.stepCount} steps</span>
            <span className="meta-badge meta-badge--lavender">{tutorial.estimatedTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
