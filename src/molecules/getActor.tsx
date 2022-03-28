import React, { useContext } from "react";
import MoxContext from "../contexts/mox";
import AddressContext from "../contexts/address";
import { useState } from "react";
import { Button, Card, Input, Title } from "../atoms";

export const GetActor = (params: {
  setActor: React.Dispatch<
    React.SetStateAction<
      | {
          id: string;
          common_type: number;
          owner: string;
          speed: number;
        }
      | null
      | undefined
    >
  >;
}) => {
  const { modules } = useContext(MoxContext);
  const { address } = useContext(AddressContext);
  if (address.length === 0) throw new Error("Account not set");
  if (!modules) throw new Error("Mox not initialize");

  const [actorHash, setActorHash] = useState("");

  const search = async () => {
    if (actorHash.length !== 66) return;
    const actor = await modules.storage.getActor(actorHash);
    console.log("Actor", actor);
    if (!actor) return;
    if (actor.owner !== address) return;
    // get actor speed
    let speed = await modules.storage.getActorAttribute(
      actorHash,
      "0xb8e540f80463545c522611d6a11fd055e901bed49887bbafda7d6dd865b1a650"
    );
    speed.value = speed.value > 600 ? 600 : speed.value;
    console.log("Speed", speed);
    params.setActor({
      common_type: actor.commonType,
      id: actorHash,
      owner: actor.owner,
      speed: speed.value ?? 300,
    });
  };

  return (
    <Card>
      <Title>Enter with your actor hash</Title>
      <Input
        value={actorHash}
        onChange={(e) => setActorHash(e.target.value)}
        placeholder="0x..."
      />
      <Button onClick={search} disabled={actorHash.length !== 66}>
        Get Char
      </Button>
    </Card>
  );
};
