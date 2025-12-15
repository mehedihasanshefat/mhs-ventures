"use client";

import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import React, { FormEvent, startTransition, useState } from "react";
import { useActionState } from "react";
import { createStartup } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const StartupForm = () => {
  const [pitch, setPitch] = useState("");

  const [formState, action, isPending] = useActionState(createStartup, {
    errors: {},
  });

  const errors = formState.errors ?? {};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.set("pitch", pitch); // IMPORTANT

    startTransition(() => {
      action(formData);
    });
  };

  return (
    <Card className="mx-auto mb-20 w-full max-w-2xl rounded-3xl">
      <CardHeader>
        <CardTitle>Startup Pitch</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* FORM ERROR */}
          {errors._form && (
            <p className="rounded-md bg-red-500/10 p-3 text-sm text-red-600">
              {errors._form[0]}
            </p>
          )}

          {/* TITLE */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Startup Title"
              required
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title[0]}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Startup Description"
              required
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description[0]}</p>
            )}
          </div>

          {/* CATEGORY */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              placeholder="Tech, Health, Education..."
              required
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category[0]}</p>
            )}
          </div>

          {/* IMAGE */}
          <div className="space-y-2">
            <Label htmlFor="link">Image URL</Label>
            <Input id="link" name="link" placeholder="Startup Image URL" />
            {errors.link && (
              <p className="text-sm text-red-500">{errors.link[0]}</p>
            )}
          </div>

          {/* PITCH */}
          <div className="space-y-2" data-color-mode="dark">
            <Label>Pitch</Label>
            <MDEditor
              value={pitch}
              onChange={(value) => setPitch(value ?? "")}
              preview="edit"
              height={300}
            />
            {errors.pitch && (
              <p className="text-sm text-red-500">{errors.pitch[0]}</p>
            )}
          </div>

          {/* SUBMIT */}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Your Pitch"}
            <Send className="ml-2 size-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StartupForm;
