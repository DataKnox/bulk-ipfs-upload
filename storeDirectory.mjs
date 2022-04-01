import { NFTStorage, File } from 'nft.storage'
import { getFilesFromPath } from 'files-from-path'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA3YTIwMjk2OTE2OTU5MTljN2E5ZjlDNjUwNzgxMjE4RGZlNGM0RjciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODgzMjE5NzYzOSwibmFtZSI6InNhbXBsZSJ9.-sPn5PSxJWFgk1-95i0k8SCIN_yJKVVC3SIIfE2nfDU'

async function main() {
  const path = process.argv.slice(2)
  const files = await getFilesFromPath(path)

  const storage = new NFTStorage({ token })

  console.log(`storing ${files.length} file(s) from ${path}`)
  const cid = await storage.storeDirectory(files, {
      pathPrefix: path, // see the note about pathPrefix below
      hidden: true // use the default of false if you want to ignore files that start with '.'
  })
  console.log({ cid })

  const status = await storage.status(cid)
  console.log(status)
}
main()
