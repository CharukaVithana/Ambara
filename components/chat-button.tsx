"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message sending here
      setMessage("")
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:right-6 z-100 w-[90vw] max-w-[400px] transition-transform duration-200 ease-out">
          <Card className="shadow-lg border-2">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <h3 className="font-semibold">Chat with us</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-primary/20"
                onClick={toggleChat}
              >
                <X className="h-4 w-4 text-primary-foreground" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] p-4 overflow-y-auto bg-card">
              <div className="flex flex-col gap-4">
                {/* Welcome Message */}
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    👋 Hello! How can we help you today?
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    Support Team • Just now
                  </span>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg max-w-[80%] ml-auto">
                  <p className="text-sm">
                    Welcome to Ambara! We typically reply within a few minutes.
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    Bot • Just now
                  </span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-card">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 md:right-6 z-100">
        <div className="relative inline-flex">
          <div className="absolute -inset-1 rounded-full animate-ping bg-primary/60" />
          <Button
            onClick={toggleChat}
            size="icon"
            className={cn(
              "relative rounded-full h-12 w-12 shadow-lg hover:scale-105 transition-transform",
              isOpen && "bg-primary/90"
            )}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          {!isOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary text-primary-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with us
            </span>
          )}
        </div>
      </div>
    </>
  )
}