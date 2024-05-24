<script setup>
import { styles } from "public/styles";
import twMerge from "tailwind-merge";
import { useField } from "vee-validate";
import { Input, InputProps } from "./input";

const props =
  defineProps <
  InputProps >
  {
    name: String,
    placeholder: String,
    label: String,
    class: String,
  };
const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div :class="twMerge('grid gap-1', props.class)">
    <label htmlFor="{name}" :class="styles.paragraph2"> {{ props.label }} </label>
    <Input
      placeholder="placeholder"
      error="{error}"
      class="w-full"
    />
    <input v-model="value" :placeholder="placeholder" />
    {{ props.errorMessage }}
  </div>
</template>
