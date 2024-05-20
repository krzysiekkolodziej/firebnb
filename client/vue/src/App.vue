<template>
  <UnauthenticatedApp v-if="!data && !isLoading" />
  <AuthenticatedApp v-else-if="data && !isLoading" />
</template>

<script setup lang="ts">
import { useUser } from "./libs/feature-data-access-api/auth";
import AuthenticatedApp from "./libs/feature-shell/authenticated-app/authenticated-app.vue";
import UnauthenticatedApp from "./libs/feature-shell/unauthenticated-app/unauthenticated-app.vue";

const { data, isLoading } = useUser();
</script>
