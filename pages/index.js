import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import HomePage from "./home/HomePage";

export default function Home() {
	return (
		<Layout>
			<HomePage />
		</Layout>
	);
}
