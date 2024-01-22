<template>
  <main>
    <div>
      {{ users }}
    </div>
  </main>
</template>

<script setup lang="ts">
import useApi from '@/composables/useApi'
import { onMounted, ref } from 'vue'
import useLoading from '@/composables/useLoading'
import type { PagedResultOfListTeamModel } from '@/api/adn-back/models'

const { processWithLoading } = useLoading()
const { adnBackApi } = useApi()

const users = ref<PagedResultOfListTeamModel>()

onMounted(async () => {
  console.log(await adnBackApi.teams.listAsync({ limit: 5, orderBy: 'username' }))
  await processWithLoading(async () => {
    users.value = await adnBackApi.teams.listAsync({ limit: 5, orderBy: 'username' })
  })
})
</script>
