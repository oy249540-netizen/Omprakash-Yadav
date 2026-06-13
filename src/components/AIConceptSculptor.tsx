
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { solveMathProblem, type StudentProblemSolverOutput } from "@/ai/flows/student-problem-solver-flow";
import { summarizeConcept, type ConceptSummarizerOutput } from "@/ai/flows/concept-summarizer";
import { Loader2, Sparkles, BookOpen, Calculator } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AIConceptSculptor() {
  const [problem, setProblem] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [solverResult, setSolverResult] = useState<StudentProblemSolverOutput | null>(null);
  const [conceptResult, setConceptResult] = useState<ConceptSummarizerOutput | null>(null);

  const handleSolve = async () => {
    if (!problem.trim()) return;
    setLoading(true);
    setSolverResult(null);
    try {
      const result = await solveMathProblem({ problem });
      setSolverResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setConceptResult(null);
    try {
      const result = await summarizeConcept({ topic, gradeLevel: "Class 8" });
      setConceptResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tutor" className="py-20 bg-mist-blue">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            AI CONCEPT SCULPTOR
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-4">
            Understand the &quot;Why&quot;, Not Just the &quot;How&quot;
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered tutor breaks down complex problems into simple, logical concepts. Try it now!
          </p>
        </div>

        <Tabs defaultValue="problem" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-primary/5 rounded-xl">
            <TabsTrigger value="problem" className="rounded-lg font-bold">Problem Solver</TabsTrigger>
            <TabsTrigger value="concept" className="rounded-lg font-bold">Concept Explainer</TabsTrigger>
          </TabsList>

          <TabsContent value="problem">
            <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-primary text-white p-6">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-gold" />
                  Solve Geometric or Algebraic Problems
                </CardTitle>
                <CardDescription className="text-white/70">
                  Paste your math question below for a conceptual breakdown.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="E.g., Find the area of a circle with radius 7cm and explain the steps."
                    className="min-h-[120px] rounded-xl border-2 focus:border-accent"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                  />
                  <Button
                    onClick={handleSolve}
                    disabled={loading || !problem.trim()}
                    className="w-full bg-saffron hover:bg-saffron/90 h-12 text-lg font-bold rounded-xl"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
                    Sculpt My Solution
                  </Button>
                </div>

                {solverResult && (
                  <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="font-headline font-bold text-primary text-xl flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-accent" />
                      Logical Steps
                    </h3>
                    <div className="grid gap-4">
                      {solverResult.conceptualSteps.map((step, idx) => (
                        <div key={idx} className="bg-white border-l-4 border-accent p-4 rounded-r-xl shadow-sm">
                          <p className="font-bold text-primary mb-1">Step {idx + 1}: {step.step}</p>
                          <p className="text-muted-foreground text-sm">{step.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="concept">
            <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-primary text-white p-6">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gold" />
                  Simplified Concept Summarizer
                </CardTitle>
                <CardDescription className="text-white/70">
                  Enter any math topic to get an easy-to-understand explanation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="E.g., Pythagoras Theorem, Prime Numbers, Fractions..."
                    className="min-h-[100px] rounded-xl border-2 focus:border-accent"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                  <Button
                    onClick={handleSummarize}
                    disabled={loading || !topic.trim()}
                    className="w-full bg-accent hover:bg-accent/90 h-12 text-lg font-bold rounded-xl"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
                    Explain Topic
                  </Button>
                </div>

                {conceptResult && (
                  <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-headline font-bold text-primary mb-2">Explanation</h3>
                        <p className="text-muted-foreground leading-relaxed">{conceptResult.explanation}</p>
                      </div>

                      {conceptResult.simplifiedExample && (
                        <div className="bg-gold/10 p-6 rounded-2xl border border-gold/20">
                          <h3 className="font-headline font-bold text-primary mb-2">Real-world Example</h3>
                          <p className="text-primary/80 italic">{conceptResult.simplifiedExample}</p>
                        </div>
                      )}

                      <div>
                        <h3 className="font-headline font-bold text-primary mb-2">Key Terms</h3>
                        <div className="flex flex-wrap gap-2">
                          {conceptResult.keyTerms.map((term, i) => (
                            <span key={i} className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
