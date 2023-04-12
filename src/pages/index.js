import Feed from "@/components/Feed";
import PresistSession from "@/components/PresistSession";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import Head from "next/head";
export default function Home() {
    return (
        <div>
            <Head>
                <title>RootNode</title>
                <meta
                    name="description"
                    content="RootNode React x Next x TailWindCss"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex min-h-screen mx-auto bg-rn-black text-rn-white pt-4 no-select">
                {/* Preserves User Session */}

                <PresistSession />
                {/* Sidebar */}
                <Sidebar />

                {/* Feed */}
                <Feed />

                {/* Widgets */}
                <Widgets />
            </main>
        </div>
    );
}
