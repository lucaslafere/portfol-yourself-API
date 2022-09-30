import { layouts } from '@prisma/client';

export type LayoutsData = Omit<layouts, 'id'>;