<template>
  <div>id:{{ route.id }}</div>
</template>

<script setup lang="ts">
import { useParams } from "@/hooks";
type Params = {
  id: string;
};

const route = useParams<Params>();
</script>
