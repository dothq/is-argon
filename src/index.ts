import { Options, verify } from "argon2"

export const isArgon = (hash: string, options?: Options) => {
    return new Promise((resolve) => {
        verify(hash, "", options)
            .then(_ => resolve(true))
            .catch(_ => resolve(false))
    })
}