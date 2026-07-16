import { TutorialLauncher } from "@/components/tutorial-player/TutorialLauncher";
import { getDrawAlongTutorials } from "@/lib/draw-along/registry";

/**
 * Server-friendly wrapper that loads registry data and hands it to the
 * client launcher. Player JavaScript is not loaded until Start Drawing.
 */
export function TutorialPreviewGrid() {
  const tutorials = getDrawAlongTutorials();
  return <TutorialLauncher tutorials={tutorials} />;
}
