import React, { useState } from "react";
import { TextInput, Button, HelperText } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { AddRecipe } from "../redux/RecipeSlice";
import { RecipeType } from "../type/type";

const CreateRecipesScreen = (props: RecipeType) => {
  const dispatch = useDispatch();

  const [Error, setError] = useState(false);
  type Values = {
    imageUrl: string;
    title: string;
    ingredients: string;
    recipe: string;
  };
  const initialValues = {
    imageUrl: "",
    title: "",
    ingredients: "",
    recipe: "",
  };

  const SubmitHandler = (values: Values, { resetForm }: { resetForm: any }) => {
    const { imageUrl, title, ingredients, recipe } = values;
    if (
      imageUrl.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      ) &&
      title &&
      ingredients &&
      recipe
    ) {
      dispatch(
        AddRecipe({
          title: values.title,
          imageUrl: values.imageUrl,
          ingredients: values.ingredients,
          recipe: values.recipe,
        })
      );
      setError(false);
      props.navigation.navigate({ routeName: "Home" });
      resetForm();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
              onChangeText={handleChange("title")}
              value={values.title}
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
              error={Error}
              onChangeText={handleChange("ingredients")}
              value={values.ingredients}
              label="Ingredients"
            />
            <HelperText type="error" visible={Error}>
              This field is required
            </HelperText>

            <TextInput
              theme={{
                colors: { primary: "#00BFFF" },
              }}
              error={Error}
              onChangeText={handleChange("recipe")}
              value={values.recipe}
              label="Recipe"
            />
            <HelperText type="error" visible={Error}>
              This field is required
            </HelperText>

            <TextInput
              theme={{
                colors: { primary: "#00BFFF" },
              }}
              error={Error}
              onChangeText={handleChange("imageUrl")}
              value={values.imageUrl}
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
              Create
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
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

export default CreateRecipesScreen;
