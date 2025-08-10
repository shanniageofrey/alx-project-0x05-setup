import { StringifyOptions } from "querystring"
import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}

export interface GeneratedImagProps {
    imageUrl: string
    prompt: string
    width?: string
    height?: string
    action: (imagePath: string) => void
}

export type ImageProps = Pick<GeneratedImagProps, "imageUrl" | "prompt">