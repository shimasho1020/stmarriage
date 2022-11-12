import { useContext } from '@nuxtjs/composition-api'

export const userApi = () => {
  const { $api } = useContext()

  const fetchUser = async (userId) => {
    const res = await $api.get(`users/${userId}`)

    return res
  }

  const fetchUsers = async () => {
    const res = await $api.get('users')

    return res
  }

  return {
    fetchUser,
    fetchUsers,
  }
}