import {items} from "@prisma/client";

export type ItemsData = Omit<items, "id">;