export interface TransformationProps {
  id: number;
  name: string;
  image: string;
  description: string;
  race: string;
  ki: string;
}

export type TransformationCardProps =
  | (Pick<
      TransformationProps,
      "id" | "name" | "image" | "description" | "ki"
    > & {
      isLoading?: false;
    })
  | {
      isLoading: true;
      id?: string | number;
      name?: string;
      image?: string;
      description?: string;
      ki?: string;
    };

export type TransformationDetailsCardProps = {
  transformation?: TransformationProps;
  isLoading?: boolean;
};
