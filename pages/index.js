import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import HomePage from "./home";

export default function IndexPage() {
	return (
		<Layout>
			<HomePage />
		</Layout>
	);
}
