import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Globe,
  LineChart,
  Rocket,
  Zap,
  Store,
  Smartphone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HighlightText } from "@/components/animate-ui/text/highlight";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden  py-20 ">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full "></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full "></div>

        <div className="container mx-auto px-4 py-12 text-center md:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <HighlightText
              className="mb-2 text-center"
              text="The Future of AI"
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <span className="block">Is Being Built Here</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl ">
            NextZenLoom is crafting intelligent applications that will transform
            how businesses operate and people interact with technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline">
              Coming Soon
              <Rocket className="ml-2 h-5 w-5" />
            </Button>

            <Button size="lg" variant="outline">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What We're Building
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              NextZenLoom is developing cutting-edge AI applications that will
              revolutionize various industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Intelligent Assistants
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                AI-powered virtual assistants that understand context and
                provide personalized support.
              </p>
              <Button
                variant="ghost"
                className="group mt-auto justify-start p-0 text-primary"
              >
                Coming Soon
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>

            <Card className="flex flex-col p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <LineChart className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Predictive Analytics
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                Advanced ML algorithms that analyze patterns and predict future
                trends with remarkable accuracy.
              </p>
              <Button
                variant="ghost"
                className="group mt-auto justify-start p-0 text-primary"
              >
                Coming Soon
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>

            <Card className="flex flex-col p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                AI-Powered Development
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                Tools that accelerate software development through intelligent
                code generation and optimization.
              </p>
              <Button
                variant="ghost"
                className="group mt-auto justify-start p-0 text-primary"
              >
                Coming Soon
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>

            <Card className="flex flex-col p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Bulk SMS Service</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                we also provide bulk sms service
              </p>
              <Button
                variant="ghost"
                className="group mt-auto justify-start p-0 text-primary"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>

            <Card className="flex flex-col p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">CRM Solutions</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                Customer Relationship Management systems to streamline your
                business.
              </p>
              <Button
                variant="ghost"
                className="group mt-auto justify-start p-0 text-primary"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>

            <Card className="flex flex-col p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                e-Commerce Platforms
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                Feature-rich online stores to grow your digital presence.
              </p>
              <Button
                variant="ghost"
                className="group mt-auto justify-start p-0 text-primary"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Play Store Section */}
      <section className="w-full bg-accent/10 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
              <Store className="h-10 w-10" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Coming Soon to Google Play Store
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Our AI-powered applications will soon be available on the Google
              Play Store. We're working hard to deliver exceptional mobile
              experiences that harness the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center rounded-xl border bg-card p-6 shadow-sm">
                <Smartphone className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">AI Assistant App</h3>
                <p className="mb-4 text-center text-muted-foreground">
                  Your personal AI assistant in your pocket
                </p>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Coming Q3 2024
                </span>
              </div>
              <div className="flex flex-col items-center rounded-xl border bg-card p-6 shadow-sm">
                <Brain className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Smart Analyzer</h3>
                <p className="mb-4 text-center text-muted-foreground">
                  Advanced data analysis and predictions
                </p>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Coming Q4 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-card py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Technology
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built on cutting-edge AI and machine learning technologies to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">High Performance</h3>
              <p className="text-muted-foreground">
                Optimized algorithms designed for speed and efficiency.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Scalable Solutions</h3>
              <p className="text-muted-foreground">
                Architecture that grows seamlessly with your needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Data Security</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security protecting sensitive information.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground">
                Systems that improve over time with each interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-card py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Here are some of our most frequently asked questions.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is NextZenLoom?</AccordionTrigger>
                <AccordionContent>
                  NextZenLoom is a technology company focused on building
                  cutting-edge AI applications that will revolutionize various
                  industries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What kind of products are you building?
                </AccordionTrigger>
                <AccordionContent>
                  We are developing a range of AI-powered applications,
                  including intelligent assistants, predictive analytics tools,
                  and AI-powered development platforms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  When will your products be available?
                </AccordionTrigger>
                <AccordionContent>
                  Our applications are currently in development and will be
                  launching soon. Join our waitlist to be the first to know when
                  we go live.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl  p-8 text-center  md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for the Future?
            </h2>
            <p className="mb-8 text-xl">
              Join our waitlist to be the first to know when our AI applications
              launch.
            </p>
            <Textarea placeholder="Connect with Email" />
            
          </div>
        </div>
      </section>
    </div>
  );
}
