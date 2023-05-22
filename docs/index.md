---
layout: home

hero:
  name: Notes
  text: Notes
  tagline: Notes
  actions:
    - theme: brand
      text: progr
      link: /progr/
    - theme: brand
      text: math
      link: /math/

features:
  - icon: ☕
    title: notes
    details: notes
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/tt5',
    name: 'tt5',
    links: [
      { icon: 'github', link: 'https://github.com/tt5' },
    ]
  },
]
</script>

<VPTeamMembers size="medium" :members="members" />
