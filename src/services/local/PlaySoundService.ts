import { IPlaySoundService } from "../../types/types";

interface ISoundPlayer {
  playSound: (path: string) => void;
}

export class PlaySoundService implements IPlaySoundService {
  private player: ISoundPlayer;
  constructor(player: ISoundPlayer) {
    this.player = player;
  }
  public playSound(path: string): boolean {
    this.player.playSound(path);
    return true;
  }
}
