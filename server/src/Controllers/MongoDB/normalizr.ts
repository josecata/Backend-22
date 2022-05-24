import { normalize, schema } from 'normalizr'

const authorsSchema = new schema.Entity('authors')
const msgSchema = new schema.Entity('messages', { author: authorsSchema }, { idAttribute: 'id' })

const normalizeMsg = (msg: string | undefined) => {
	const msgNormalized = normalize(msg, [msgSchema])
	return msgNormalized
}

export { normalizeMsg }
