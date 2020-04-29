import bcrypt from 'bcryptjs'

import truncate from '../../utils/truncate'

import { User } from '../../../src/app/models'

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await User.create({ name: 'Breno', email: 'hennrique.breno@gmail.com', password: 'qwerty' })

    const compareHash = await bcrypt.compare('qwerty', user.password_hash)

    expect(compareHash).toBe(true)
  })
})
