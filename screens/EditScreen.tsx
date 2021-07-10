import React, { useState } from "react";
import { TextInput, Button, HelperText } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { EditRecipe } from "../redux/RecipeSlice";
import { RecipeType } from "../type/type";

const EditScreen: React.FC<RecipeType> = (props) => {
  const Recipe = props.navigation.getParam("Recipe");
  const { title, imageUrl, ingredients, recipe } = Recipe;
  const dispatch = useDispatch();

  const [Error, setError] = useState(false);
  type Values = {
    imageUrl: string;
    title: string;
    ingredients: string;
    recipe: string;
  };
  const initialValues: Values = {
    imageUrl: imageUrl,
    title: title,
    ingredients: ingredients,
    recipe: recipe,
  };

  const SubmitHandler = (values: Values, { resetForm }: { resetForm: any }) => {
    const { imageUrl, title, ingredients, recipe } = values;
    console.log(values);
    if (
      imageUrl.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      ) &&
      title &&
      ingredients &&
      recipe
    ) {
      dispatch(
        EditRecipe({
          id: Recipe.id,
          imageUrl: values.imageUrl,
          title: values.title,
          ingredients: values.ingredients,
          recipe: values.recipe,
        })
      );
      setError(false);
      props.navigation.goBack();
      resetForm();
    } else {
      setError(true);
    }
  };

  return (
    <Formik
      style={styles.container}
      onSubmit={SubmitHandler}
      initialValues={initialValues}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.wrapper}>
          <TextInput
            theme={{
              colors: { primary: "#00BFFF" },
            }}
            value={values.title}
            onChangeText={handleChange("title")}
            label="Title"
            error={Error}
          />
          <HelperText type="error" visible={Error}>
            This field is required
          </HelperText>

          <TextInput
            theme={{
              colors: { primary: "#00BFFF" },
            }}
            value={values.ingredients}
            onChangeText={handleChange("ingredients")}
            label="Ingredients"
            error={Error}
          />
          <HelperText type="error" visible={Error}>
            This field is required
          </HelperText>

          <TextInput
            theme={{
              colors: { primary: "#00BFFF" },
            }}
            value={values.recipe}
            editable={true}
            error={Error}
            onChangeText={handleChange("recipe")}
            label="Recipe"
          />
          <HelperText type="error" visible={Error}>
            This field is required
          </HelperText>

          <TextInput
            theme={{
              colors: { primary: "#00BFFF" },
            }}
            value={values.imageUrl}
            error={Error}
            onChangeText={handleChange("imageUrl")}
            label="Image URL"
          />
          <HelperText type="error" visible={Error}>
            This field is required (Valid URL required)
          </HelperText>

          <Button
            style={styles.button}
            icon="plus"
            mode="contained"
            onPress={handleSubmit}
          >
            Update
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  wrapper: {
    padding: 20,
  },
  button: {
    backgroundColor: "#00BFFF",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default EditScreen;
