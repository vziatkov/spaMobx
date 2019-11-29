import { IPlaySoundService } from "../../types/types";

interface ISoundPlayer {
  playSound: (path: string) => void;
}

export class PlaySoundService implements IPlaySoundService {
  constructor(private player: ISoundPlayer) {}
  public playSound(path: string): boolean {
    this.player.playSound(path);
    return true;
  }
}
