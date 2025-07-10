import { auth } from "@/auth"
import { redirect } from "next/navigation"

const DonatePage = async () => {
  const session = await auth()

  if (!session?.user) redirect("/")

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-gray-700 text-lg">
            Support our mission to bring handmade art and joy to elderly communities across Georgia.
          </p>
        </div>

        {/* Givebutter integration will go here */}
        <div className="gfm-embed" data-url="https://www.gofundme.com/f/bring-smiles-to-foster-kids-and-the-elderly/widget/large?sharesheet=undefined&attribution_id=sl:13990787-6cd3-4cbb-b231-43dca2bf87cd"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>
      </div>
    </div>
  )
}

export default DonatePage
