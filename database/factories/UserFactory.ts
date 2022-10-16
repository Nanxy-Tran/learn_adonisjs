import { faker } from '@faker-js/faker'
import User from 'App/Models/User'

export const UserFactory = async () => {
  const fullName = faker.name.fullName()
  return await User.create({
    full_name: fullName,
    email: faker.internet.email(fullName.split(' ').pop()),
  })
}
