import { NavigationScreenProp } from "react-navigation";

export interface RecipeType {
  navigation: NavigationScreenProp<any, any>;
}
export type Values = {
  imageUrl: string;
  title: string;
  ingredients: string;
  recipe: string;
};

export type FormProps = {
  Error: boolean;
  initialValues: Values;
  SubmitHandler: (values: Values, { resetForm }: { resetForm: any }) => void;
};

export type ItemProp = {
  favourited: boolean;
  title: string;
  imageUrl: string;
  onSelect: () => void;
};
