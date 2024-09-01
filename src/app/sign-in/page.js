import Head from 'next/head';
import LoginForm from "@/components/Auth/LoginForm";

const SignIn = () => {
    return (
        <>
            <Head>
                <title>Sign In - Joey Med | Access Your Health Account</title>
                <meta name="description" content="Sign in to your Joey Med account to access personalized healthcare services, manage your health goals, and consult with providers online." />
                <link rel="canonical" href="https://www.joeymed.com/sign-in" />
                <meta property="og:title" content="Sign In - Joey Med" />
                <meta property="og:description" content="Access your Joey Med account to manage your healthcare services, connect with providers, and stay on top of your health." />
                <meta property="og:url" content="https://www.joeymed.com/sign-in" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/joeymed-signin-og-image.jpg" />
                <meta name="robots" content="index, follow" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Sign In - Joey Med",
                            "description": "Sign in to your Joey Med account to access personalized healthcare services.",
                            "url": "https://www.joeymed.com/sign-in",
                        }),
                    }}
                />
            </Head>
            <main>
                <section aria-labelledby="signin-header">
                    <h1 id="signin-header" style={{ display: 'none' }}>Sign In</h1>
                    <LoginForm />
                </section>
            </main>
        </>
    );
};

export default SignIn;
