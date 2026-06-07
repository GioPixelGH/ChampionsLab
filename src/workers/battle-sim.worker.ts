import { runSimulation } from "@/lib/engine/battle-sim";
import type { ChampionsPokemon, CommonSet } from "@/lib/types";

interface WorkerRequest {
  team1Pokemon: ChampionsPokemon[];
  team1Sets: CommonSet[];
  team2Pokemon: ChampionsPokemon[];
  team2Sets: CommonSet[];
  iterations: number;
}

self.onmessage = (e: MessageEvent<WorkerRequest>) => {
  const { team1Pokemon, team1Sets, team2Pokemon, team2Sets, iterations } = e.data;
  const result = runSimulation(team1Pokemon, team1Sets, team2Pokemon, team2Sets, iterations);
  self.postMessage(result);
};
