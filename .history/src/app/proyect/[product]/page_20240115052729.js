
export default function Page({params}) {
  console.log(params.product)
  return <p>Post {params.id}</p>
}