import React from "react";
import { Title } from "../atoms";
import SpeedItem from "../molecules/speedItem";
import IncreaseSpeedImg from "../assets/increaseSpeedPotion.png";
import DecreaseSpeedImg from "../assets/decreaseSpeedPotion.png";

const Items = (params: {
  actor?:
    | {
        id: string;
        common_type: number;
        owner: string;
        speed: number;
      }
    | null
    | undefined;
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
  if (!params.actor) {
    return <Title>Load actor to see the available items</Title>;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "70vh",
        justifyContent: "space-between",
      }}
    >
      <SpeedItem
        actor={params.actor}
        setActor={params.setActor}
        itemAsset={IncreaseSpeedImg}
        itemId="0x2372c9bb4e2008aa42b7c67533af805aa7477eaac133e16f617ce9e1af888f34"
        itemName="Increase speed potion"
      />
      <SpeedItem
        actor={params.actor}
        setActor={params.setActor}
        itemAsset={DecreaseSpeedImg}
        itemId="0xc71943886a686e3ae37929e0c4ab9074675eef04c1fa69f363af432a89756ab6"
        itemName="Decrease speed potion"
      />
    </div>
  );
};

export default Items;
