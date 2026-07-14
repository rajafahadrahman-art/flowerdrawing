import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-main section-space text-center">
      <h1 className="heading-display">Page not found</h1>
      <p className="mx-auto mt-4 max-w-lg text-muted">
        The page you requested is not available. Browse the flower drawing tutorials to continue
        practicing.
      </p>
      <Link href="/flower-drawing/" className="btn btn-primary mt-8">
        View Drawing Tutorials
      </Link>
    </div>
  );
}
