"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface FileUploadProps {
  onUploadSuccess: (url: string) => void;
  onUploadError?: (error: string) => void;
  accept?: string;
  maxSize?: number;
  label?: string;
}

export function FileUpload({
  onUploadSuccess,
  onUploadError,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024,
  label = "Selecione uma imagem",
}: FileUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > maxSize) {
      const errorMsg = `Arquivo muito grande. Máximo: ${maxSize / 1024 / 1024}MB`;
      setError(errorMsg);
      onUploadError?.(errorMsg);
      return;
    }

    if (!file.type.startsWith("image/")) {
      const errorMsg = "Por favor, selecione uma imagem válida";
      setError(errorMsg);
      onUploadError?.(errorMsg);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    await uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao fazer upload");
      }

      const data = await response.json();
      onUploadSuccess(data.url);
      setError(null);
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Erro ao fazer upload";
      setError(errorMsg);
      onUploadError?.(errorMsg);
      setPreview(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 border-2 border-dashed border-gray-300 hover:border-gray-400 transition">
        <div className="flex flex-col items-center justify-center gap-4">
          {preview ? (
            <div className="relative w-32 h-32">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover rounded"
              />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-2">📁 {label}</p>
              <p className="text-sm text-gray-500">
                Arraste e solte ou clique para selecionar
              </p>
            </div>
          )}

          <Input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            disabled={isLoading}
            className="hidden"
          />

          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? "Enviando..." : "Selecionar Arquivo"}
          </Button>
        </div>
      </Card>

      {error && <div className="text-red-600 text-sm">{error}</div>}
    </div>
  );
}