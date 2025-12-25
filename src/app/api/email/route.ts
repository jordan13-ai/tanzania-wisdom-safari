import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'Email service not configured' },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            message,
            tripType,
            destinations,
            travelDates,
            duration,
            travelers,
            budget,
            accommodation,
            country,
            specialRequests
        } = body;

        // Construct email content based on form type (Contact vs Quote)
        let subject = 'New Inquiry from Website';
        let htmlContent = '';

        if (tripType || destinations) {
            subject = `New Safari Quote Request: ${firstName} ${lastName}`;
            htmlContent = `
                <h1>New Custom Quote Request</h1>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Country:</strong> ${country}</p>
                
                <h2>Trip Details</h2>
                <ul>
                    <li><strong>Trip Type:</strong> ${tripType}</li>
                    <li><strong>Destinations:</strong> ${destinations || 'N/A'}</li>
                    <li><strong>Dates:</strong> ${travelDates || 'N/A'}</li>
                    <li><strong>Duration:</strong> ${duration}</li>
                    <li><strong>Travelers:</strong> ${travelers}</li>
                    <li><strong>Budget:</strong> ${budget}</li>
                    <li><strong>Accommodation:</strong> ${accommodation}</li>
                </ul>

                <h2>Special Requests</h2>
                <p>${specialRequests || 'None'}</p>
            `;
        } else {
            subject = `New Contact Message: ${firstName} ${lastName}`;
            htmlContent = `
                <h1>New Contact Message</h1>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                
                <h2>Message</h2>
                <p>${message}</p>
                
                ${body.interest ? `<p><strong>Interest:</strong> ${body.interest}</p>` : ''}
            `;
        }

        const data = await resend.emails.send({
            from: 'Tanzania Wisdom Safaris <onboarding@resend.dev>', // Update this if they have a verified domain
            to: ['info@tanzaniawisdomsafaris.com'],
            subject: subject,
            html: htmlContent,
            replyTo: email
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
