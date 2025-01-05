'use client'

import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ContactDialogProps {
    children: React.ReactNode;
}

export default function ContactDialog({ children }: ContactDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Choisissez votre méthode de contact</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Button
                        onClick={() => window.location.href = 'mailto:garagemaautoservices@outlook.com'}
                        className="flex items-center justify-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        Email
                    </Button>
                    <Button
                        onClick={() => window.open('https://wa.me/212670058094', '_blank')}
                        className="flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                    </Button>
                    <Button
                        onClick={() => window.location.href = 'tel:+212670058094'}
                        className="flex items-center justify-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        Appel Téléphonique
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

