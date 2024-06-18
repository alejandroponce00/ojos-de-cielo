import { Caveat, Zeyada } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Roboto } from "next/font/google";

export const zeyada = Zeyada({ subsets: ["latin"], weight: "400" });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
  });
  export const caveat = Caveat({
    weight: ["500", "700"],
    subsets: ["latin"],
  });