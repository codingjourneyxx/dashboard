/**
 * Dashboard - Folder Viewer
 * Displays folders, then images inside on click
 */

// Configuration - Organize images by folder
const CONFIG = {
    title: 'Template Kits Gallery',
    baseUrl: window.location.origin + window.location.pathname.replace('index.html', ''),
    folders: [
        {
            name: 'Axistudio - Branding & Creative Studio Elementor Template Kit',
            images: [
                { name: '2.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/2.png' },
                { name: '3.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/3.png' },
                { name: '4.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/4.png' },
                { name: '5.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/5.png' },
                { name: '6.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/6.png' },
                { name: '7.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/7.png' },
                { name: '8.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/8.png' },
                { name: '9.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/9.png' },
                { name: '10.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/10.png' },
            ]
        },
        {
            name: 'Business Consulting Wordpress Theme',
            images: [
                { name: 'Business Solutions Theme.png', url: 'Business Consulting Wordpress Theme/Business Solutions Theme.png' },
            ]
        },
        {
            name: 'Creastic – Creative Digital Agency Elementor Template',
            images: [
                { name: '1.png', url: 'Creastic – Creative Digital Agency Elementor Template/1.png' },
                { name: '2.png', url: 'Creastic – Creative Digital Agency Elementor Template/2.png' },
                { name: '3.png', url: 'Creastic – Creative Digital Agency Elementor Template/3.png' },
                { name: '4.png', url: 'Creastic – Creative Digital Agency Elementor Template/4.png' },
                { name: '5.png', url: 'Creastic – Creative Digital Agency Elementor Template/5.png' },
                { name: '6.png', url: 'Creastic – Creative Digital Agency Elementor Template/6.png' },
                { name: '7.png', url: 'Creastic – Creative Digital Agency Elementor Template/7.png' },
                { name: '8.png', url: 'Creastic – Creative Digital Agency Elementor Template/8.png' },
                { name: '9.png', url: 'Creastic – Creative Digital Agency Elementor Template/9.png' },
                { name: '10.png', url: 'Creastic – Creative Digital Agency Elementor Template/10.png' },
            ]
        },
        {
            name: 'Execor – Accounting & Management Consulting',
            images: [
                { name: 'intro2.png', url: 'Execor – Accounting & Management Consulting/intro2.png' },
                { name: '1.png', url: 'Execor – Accounting & Management Consulting/1.png' },
                { name: '2.png', url: 'Execor – Accounting & Management Consulting/2.png' },
                { name: '3.png', url: 'Execor – Accounting & Management Consulting/3.png' },
                { name: '4.png', url: 'Execor – Accounting & Management Consulting/4.png' },
                { name: '5.png', url: 'Execor – Accounting & Management Consulting/5.png' },
                { name: '6.png', url: 'Execor – Accounting & Management Consulting/6.png' },
                { name: '7.png', url: 'Execor – Accounting & Management Consulting/7.png' },
                { name: '8.png', url: 'Execor – Accounting & Management Consulting/8.png' },
                { name: '9.png', url: 'Execor – Accounting & Management Consulting/9.png' },
                { name: '10.png', url: 'Execor – Accounting & Management Consulting/10.png' },
            ]
        },
        {
            name: 'Finovate',
            images: [
                { name: '1.png', url: 'Finovate/1.png' },
                { name: '2.png', url: 'Finovate/2.png' },
                { name: '3.png', url: 'Finovate/3.png' },
                { name: '4.png', url: 'Finovate/4.png' },
                { name: '5.png', url: 'Finovate/5.png' },
                { name: '6.png', url: 'Finovate/6.png' },
                { name: '7.png', url: 'Finovate/7.png' },
                { name: '8.png', url: 'Finovate/8.png' },
                { name: '9.png', url: 'Finovate/9.png' },
                { name: '10.png', url: 'Finovate/10.png' },
            ]
        },
        {
            name: 'Homirx – Real Estate WordPress Theme',
            images: [
                { name: '1.png', url: 'Homirx – Real Estate WordPress Theme/1.png' },
                { name: '2.png', url: 'Homirx – Real Estate WordPress Theme/2.png' },
                { name: '3.png', url: 'Homirx – Real Estate WordPress Theme/3.png' },
                { name: '4.png', url: 'Homirx – Real Estate WordPress Theme/4.png' },
                { name: '5.png', url: 'Homirx – Real Estate WordPress Theme/5.png' },
                { name: '6.png', url: 'Homirx – Real Estate WordPress Theme/6.png' },
                { name: '7.png', url: 'Homirx – Real Estate WordPress Theme/7.png' },
                { name: '8.png', url: 'Homirx – Real Estate WordPress Theme/8.png' },
                { name: '9.png', url: 'Homirx – Real Estate WordPress Theme/9.png' },
            ]
        },
        {
            name: 'Innovecouture',
            images: [
                { name: '1.png', url: 'innovecouture/1.png' },
                { name: '2.png', url: 'innovecouture/2.png' },
                { name: '3.png', url: 'innovecouture/3.png' },
                { name: '4.png', url: 'innovecouture/4.png' },
                { name: '5.png', url: 'innovecouture/5.png' },
                { name: '6.png', url: 'innovecouture/6.png' },
                { name: '7.png', url: 'innovecouture/7.png' },
                { name: '8.png', url: 'innovecouture/8.png' },
                { name: '9.png', url: 'innovecouture/9.png' },
            ]
        },
        {
            name: 'Interior Design WordPress Theme',
            images: [
                { name: '1.png', url: 'Interior Design WordPress Theme/1.png' },
                { name: '2.png', url: 'Interior Design WordPress Theme/2.png' },
                { name: '3.png', url: 'Interior Design WordPress Theme/3.png' },
                { name: '4.png', url: 'Interior Design WordPress Theme/4.png' },
                { name: '5.png', url: 'Interior Design WordPress Theme/5.png' },
                { name: '6.png', url: 'Interior Design WordPress Theme/6.png' },
                { name: '7.png', url: 'Interior Design WordPress Theme/7.png' },
                { name: '8.png', url: 'Interior Design WordPress Theme/8.png' },
                { name: '9.png', url: 'Interior Design WordPress Theme/9.png' },
                { name: '10.png', url: 'Interior Design WordPress Theme/10.png' },
            ]
        },
        {
            name: 'iTactics',
            images: [
                { name: '1.png', url: 'itactics/1.png' },
                { name: '2.png', url: 'itactics/2.png' },
                { name: '3.png', url: 'itactics/3.png' },
                { name: '4.png', url: 'itactics/4.png' },
                { name: '5.png', url: 'itactics/5.png' },
                { name: '6.png', url: 'itactics/6.png' },
                { name: '7.png', url: 'itactics/7.png' },
                { name: '8.png', url: 'itactics/8.png' },
                { name: '9.png', url: 'itactics/9.png' },
                { name: '10.png', url: 'itactics/10.png' },
            ]
        },
        {
            name: 'MaxReach - SEO & Digital Agency (Style 1)',
            images: [
                { name: 'intro1.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/intro1.png' },
                { name: '2.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/2.png' },
                { name: '3.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/3.png' },
                { name: '4.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/4.png' },
                { name: '5.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/5.png' },
                { name: '6.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/6.png' },
                { name: '7.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/7.png' },
                { name: '8.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/8.png' },
                { name: '9.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/9.png' },
                { name: '10.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/10.png' },
            ]
        },
        {
            name: 'MaxReach - SEO & Digital Agency (Style 2)',
            images: [
                { name: 'intro2.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/intro2.png' },
                { name: '2.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/2.png' },
                { name: '3.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/3.png' },
                { name: '4.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/4.png' },
                { name: '5.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/5.png' },
                { name: '6.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/6.png' },
                { name: '7.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/7.png' },
                { name: '8.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/8.png' },
                { name: '9.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/9.png' },
                { name: '10.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/10.png' },
            ]
        },
        {
            name: 'MaxReach - SEO & Digital Agency (Style 3)',
            images: [
                { name: 'intro3.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/intro3.png' },
                { name: '2.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/2.png' },
                { name: '3.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/3.png' },
                { name: '4.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/4.png' },
                { name: '5.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/5.png' },
                { name: '6.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/6.png' },
                { name: '7.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/7.png' },
                { name: '8.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/8.png' },
                { name: '9.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/9.png' },
                { name: '10.png', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/10.png' },
            ]
        },
        {
            name: 'Most – Creative Agency and Portfolio Theme',
            images: [
                { name: '1.png', url: 'Most – Creative Agency and Portfolio Theme/1.png' },
                { name: '2.png', url: 'Most – Creative Agency and Portfolio Theme/2.png' },
                { name: '3.png', url: 'Most – Creative Agency and Portfolio Theme/3.png' },
                { name: '4.png', url: 'Most – Creative Agency and Portfolio Theme/4.png' },
                { name: '5.png', url: 'Most – Creative Agency and Portfolio Theme/5.png' },
                { name: '6.png', url: 'Most – Creative Agency and Portfolio Theme/6.png' },
                { name: '7.png', url: 'Most – Creative Agency and Portfolio Theme/7.png' },
                { name: '8.png', url: 'Most – Creative Agency and Portfolio Theme/8.png' },
                { name: '9.png', url: 'Most – Creative Agency and Portfolio Theme/9.png' },
                { name: '10.png', url: 'Most – Creative Agency and Portfolio Theme/10.png' },
            ]
        },
        {
            name: 'Mouno - Creative Digital Agency (Style 1)',
            images: [
                { name: 'intro1.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/intro1.png' },
                { name: '2.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/2.png' },
                { name: '3.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/3.png' },
                { name: '4.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/4.png' },
                { name: '5.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/5.png' },
                { name: '6.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/6.png' },
                { name: '7.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/7.png' },
                { name: '8.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/8.png' },
                { name: '9.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/9.png' },
                { name: '10.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/10.png' },
                { name: '11.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s1/11.png' },
            ]
        },
        {
            name: 'Mouno - Creative Digital Agency (Style 2)',
            images: [
                { name: 'intro2.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/intro2.png' },
                { name: '2.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/2.png' },
                { name: '3.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/3.png' },
                { name: '4.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/4.png' },
                { name: '5.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/5.png' },
                { name: '6.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/6.png' },
                { name: '7.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/7.png' },
                { name: '8.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/8.png' },
                { name: '9.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/9.png' },
                { name: '10.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/10.png' },
                { name: '11.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s2/11.png' },
            ]
        },
        {
            name: 'Mouno - Creative Digital Agency (Style 3)',
            images: [
                { name: 'intro3.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/intro3.png' },
                { name: '2.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/2.png' },
                { name: '3.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/3.png' },
                { name: '4.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/4.png' },
                { name: '5.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/5.png' },
                { name: '6.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/6.png' },
                { name: '7.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/7.png' },
                { name: '8.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/8.png' },
                { name: '9.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/9.png' },
                { name: '10.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/10.png' },
                { name: '11.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s3/11.png' },
            ]
        },
        {
            name: 'Mouno - Creative Digital Agency (Style 4)',
            images: [
                { name: 'intro4.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/intro4.png' },
                { name: '2.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/2.png' },
                { name: '3.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/3.png' },
                { name: '4.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/4.png' },
                { name: '5.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/5.png' },
                { name: '6.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/6.png' },
                { name: '7.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/7.png' },
                { name: '8.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/8.png' },
                { name: '9.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/9.png' },
                { name: '10.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/10.png' },
                { name: '11.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s4/11.png' },
            ]
        },
        {
            name: 'Mouno - Creative Digital Agency (Style 5)',
            images: [
                { name: 'intro5.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/intro5.png' },
                { name: '2.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/2.png' },
                { name: '3.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/3.png' },
                { name: '4.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/4.png' },
                { name: '5.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/5.png' },
                { name: '6.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/6.png' },
                { name: '7.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/7.png' },
                { name: '8.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/8.png' },
                { name: '9.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/9.png' },
                { name: '10.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/10.png' },
                { name: '11.png', url: 'Mouno - Creative Digital Agency WordPress Theme/s5/11.png' },
            ]
        },
        {
            name: 'Ingenioso (Style 1)',
            images: [
                { name: 'intro1.png', url: 'mulitple_ingesiso/s1/intro1.png' },
                { name: '2.png', url: 'mulitple_ingesiso/s1/2.png' },
                { name: '3.png', url: 'mulitple_ingesiso/s1/3.png' },
                { name: '4.png', url: 'mulitple_ingesiso/s1/4.png' },
                { name: '5.png', url: 'mulitple_ingesiso/s1/5.png' },
                { name: '6.png', url: 'mulitple_ingesiso/s1/6.png' },
                { name: '7.png', url: 'mulitple_ingesiso/s1/7.png' },
                { name: '8.png', url: 'mulitple_ingesiso/s1/8.png' },
                { name: '9.png', url: 'mulitple_ingesiso/s1/9.png' },
                { name: '10.png', url: 'mulitple_ingesiso/s1/10.png' },
            ]
        },
        {
            name: 'Ingenioso (Style 2)',
            images: [
                { name: 'intro2.png', url: 'mulitple_ingesiso/s2/intro2.png' },
                { name: '2.png', url: 'mulitple_ingesiso/s2/2.png' },
                { name: '3.png', url: 'mulitple_ingesiso/s2/3.png' },
                { name: '4.png', url: 'mulitple_ingesiso/s2/4.png' },
                { name: '5.png', url: 'mulitple_ingesiso/s2/5.png' },
                { name: '6.png', url: 'mulitple_ingesiso/s2/6.png' },
                { name: '7.png', url: 'mulitple_ingesiso/s2/7.png' },
                { name: '8.png', url: 'mulitple_ingesiso/s2/8.png' },
                { name: '9.png', url: 'mulitple_ingesiso/s2/9.png' },
                { name: '10.png', url: 'mulitple_ingesiso/s2/10.png' },
            ]
        },
        {
            name: 'Ingenioso (Style 3)',
            images: [
                { name: 'intro3.png', url: 'mulitple_ingesiso/s3/intro3.png' },
                { name: '2.png', url: 'mulitple_ingesiso/s3/2.png' },
                { name: '3.png', url: 'mulitple_ingesiso/s3/3.png' },
                { name: '4.png', url: 'mulitple_ingesiso/s3/4.png' },
                { name: '5.png', url: 'mulitple_ingesiso/s3/5.png' },
                { name: '6.png', url: 'mulitple_ingesiso/s3/6.png' },
                { name: '7.png', url: 'mulitple_ingesiso/s3/7.png' },
                { name: '8.png', url: 'mulitple_ingesiso/s3/8.png' },
                { name: '9.png', url: 'mulitple_ingesiso/s3/9.png' },
                { name: '10.png', url: 'mulitple_ingesiso/s3/10.png' },
            ]
        },
        {
            name: 'Ingenioso (Style 4)',
            images: [
                { name: 'intro4.png', url: 'mulitple_ingesiso/s4/intro4.png' },
                { name: '2.png', url: 'mulitple_ingesiso/s4/2.png' },
                { name: '3.png', url: 'mulitple_ingesiso/s4/3.png' },
                { name: '4.png', url: 'mulitple_ingesiso/s4/4.png' },
                { name: '5.png', url: 'mulitple_ingesiso/s4/5.png' },
                { name: '6.png', url: 'mulitple_ingesiso/s4/6.png' },
                { name: '7.png', url: 'mulitple_ingesiso/s4/7.png' },
                { name: '8.png', url: 'mulitple_ingesiso/s4/8.png' },
                { name: '9.png', url: 'mulitple_ingesiso/s4/9.png' },
                { name: '10.png', url: 'mulitple_ingesiso/s4/10.png' },
            ]
        },
        {
            name: 'Ingenioso (Style 5)',
            images: [
                { name: 'intro5.png', url: 'mulitple_ingesiso/s5/intro5.png' },
                { name: '2.png', url: 'mulitple_ingesiso/s5/2.png' },
                { name: '3.png', url: 'mulitple_ingesiso/s5/3.png' },
                { name: '4.png', url: 'mulitple_ingesiso/s5/4.png' },
                { name: '5.png', url: 'mulitple_ingesiso/s5/5.png' },
                { name: '6.png', url: 'mulitple_ingesiso/s5/6.png' },
                { name: '7.png', url: 'mulitple_ingesiso/s5/7.png' },
                { name: '8.png', url: 'mulitple_ingesiso/s5/8.png' },
                { name: '9.png', url: 'mulitple_ingesiso/s5/9.png' },
                { name: '10.png', url: 'mulitple_ingesiso/s5/10.png' },
            ]
        },
        {
            name: 'Newspaper',
            images: [
                { name: '1.png', url: 'Newspaper/1.png' },
                { name: '2.png', url: 'Newspaper/2.png' },
                { name: '3.png', url: 'Newspaper/3.png' },
                { name: '4.png', url: 'Newspaper/4.png' },
                { name: '5.png', url: 'Newspaper/5.png' },
                { name: '6.png', url: 'Newspaper/6.png' },
                { name: '7.png', url: 'Newspaper/7.png' },
                { name: '8.png', url: 'Newspaper/8.png' },
                { name: '9.png', url: 'Newspaper/9.png' },
                { name: '10.png', url: 'Newspaper/10.png' },
            ]
        },
        {
            name: 'Numerique',
            images: [
                { name: '1.png', url: 'numerique/1.png' },
                { name: '2.png', url: 'numerique/2.png' },
                { name: '3.png', url: 'numerique/3.png' },
                { name: '4.png', url: 'numerique/4.png' },
                { name: '5.png', url: 'numerique/5.png' },
                { name: '6.png', url: 'numerique/6.png' },
                { name: '7.png', url: 'numerique/7.png' },
                { name: '8.png', url: 'numerique/8.png' },
                { name: '9.png', url: 'numerique/9.png' },
                { name: '10.png', url: 'numerique/10.png' },
            ]
        },
        {
            name: 'Pixelpiernyc - Creative Agency Portfolio Freelance',
            images: [
                { name: '1.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/1.png' },
                { name: '2.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/2.png' },
                { name: '3.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/3.png' },
                { name: '4.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/4.png' },
                { name: '5.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/5.png' },
                { name: '6.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/6.png' },
                { name: '7.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/7.png' },
                { name: '8.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/8.png' },
                { name: '9.png', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/9.png' },
            ]
        },
        {
            name: 'Rentic',
            images: [
                { name: '1.png', url: 'Rentic/1.png' },
                { name: '2.png', url: 'Rentic/2.png' },
                { name: '3.png', url: 'Rentic/3.png' },
                { name: '4.png', url: 'Rentic/4.png' },
                { name: '5.png', url: 'Rentic/5.png' },
                { name: '6.png', url: 'Rentic/6.png' },
                { name: '7.png', url: 'Rentic/7.png' },
                { name: '8.png', url: 'Rentic/8.png' },
                { name: '9.png', url: 'Rentic/9.png' },
                { name: '10.png', url: 'Rentic/10.png' },
                { name: '11.png', url: 'Rentic/11.png' },
            ]
        },
        {
            name: 'Tecnologia (Style 1)',
            images: [
                { name: 'App-Development.png', url: 'Tecnologia/s1/App-Development---Tecnologia-12-01-2025_05_21_PM.png' },
                { name: '1.png', url: 'Tecnologia/s1/1.png' },
                { name: '2.png', url: 'Tecnologia/s1/2.png' },
                { name: '3.png', url: 'Tecnologia/s1/3.png' },
                { name: '4.png', url: 'Tecnologia/s1/4.png' },
                { name: '5.png', url: 'Tecnologia/s1/5.png' },
                { name: '6.png', url: 'Tecnologia/s1/6.png' },
                { name: '7.png', url: 'Tecnologia/s1/7.png' },
                { name: '8.png', url: 'Tecnologia/s1/8.png' },
                { name: '9.png', url: 'Tecnologia/s1/9.png' },
            ]
        },
        {
            name: 'Tecnologia (Style 2)',
            images: [
                { name: 'App-Development.png', url: 'Tecnologia/s2/App-Development---Tecnologia-12-01-2025_05_21_PM.png' },
                { name: '2.png', url: 'Tecnologia/s2/2.png' },
                { name: '3.png', url: 'Tecnologia/s2/3.png' },
                { name: '4.png', url: 'Tecnologia/s2/4.png' },
                { name: '5.png', url: 'Tecnologia/s2/5.png' },
                { name: '6.png', url: 'Tecnologia/s2/6.png' },
                { name: '7.png', url: 'Tecnologia/s2/7.png' },
                { name: '8.png', url: 'Tecnologia/s2/8.png' },
                { name: '9.png', url: 'Tecnologia/s2/9.png' },
            ]
        },
    ]
};

// DOM Elements
const folderNameEl = document.getElementById('folderName');
const imageCountEl = document.getElementById('imageCount');
const imageGridEl = document.getElementById('imageGrid');
const emptyStateEl = document.getElementById('emptyState');
const toastEl = document.getElementById('toast');
const imageModalEl = document.getElementById('imageModal');
const modalImageEl = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');

// State
let currentFolder = null;

// Lazy load observer (single instance for performance)
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            lazyObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

/**
 * Lazy load an image using IntersectionObserver
 */
function lazyLoadImage(img) {
    if (img.dataset.src) {
        lazyObserver.observe(img);
    }
}

/**
 * Initialize the dashboard
 */
function init() {
    // Set title
    folderNameEl.textContent = CONFIG.title;

    // Show folders initially
    showFolders();

    // Setup modal close functionality
    setupModal();
}

/**
 * Show folders view
 */
function showFolders() {
    currentFolder = null;
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    folderNameEl.textContent = CONFIG.title;
    imageCountEl.textContent = `${CONFIG.folders.length} folder${CONFIG.folders.length !== 1 ? 's' : ''}`;

    // Update header icon to folder
    updateHeaderIcon('folder');

    // Use DocumentFragment for batch DOM insertion
    const fragment = document.createDocumentFragment();
    CONFIG.folders.forEach((folder, index) => {
        const card = createFolderCard(folder, index);
        fragment.appendChild(card);
    });
    imageGridEl.appendChild(fragment);
}

/**
 * Create a folder card element
 */
function createFolderCard(folder, index) {
    const card = document.createElement('div');
    card.className = 'relative overflow-hidden rounded-lg bg-gray-50 aspect-square cursor-pointer border border-gray-200 flex flex-col items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100 transition-transform duration-150';

    // Faster staggered animation (max 300ms total delay)
    card.style.cssText = `opacity:0;transform:translateY(10px);animation:fadeIn 0.2s ease forwards;animation-delay:${Math.min(index * 30, 300)}ms;`;

    card.innerHTML = `
        <div class="mb-3">
            <svg class="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
        </div>
        <span class="text-sm font-medium text-gray-700 text-center line-clamp-2 px-2">${folder.name}</span>
        <span class="text-xs text-accent mt-2">${folder.images.length} image${folder.images.length !== 1 ? 's' : ''}</span>
    `;

    card.addEventListener('click', () => openFolder(folder));

    return card;
}

/**
 * Open a folder and show its images
 */
function openFolder(folder) {
    currentFolder = folder;
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    folderNameEl.textContent = folder.name;
    imageCountEl.textContent = `${folder.images.length} image${folder.images.length !== 1 ? 's' : ''}`;

    // Update header icon to back arrow
    updateHeaderIcon('back');

    if (folder.images.length === 0) {
        emptyStateEl.classList.remove('hidden');
        return;
    }

    // Use DocumentFragment for batch DOM insertion (better performance)
    const fragment = document.createDocumentFragment();
    folder.images.forEach((image, index) => {
        const card = createImageCard(image, index);
        fragment.appendChild(card);
    });
    imageGridEl.appendChild(fragment);
}

/**
 * Update header icon (folder or back arrow)
 */
function updateHeaderIcon(type) {
    const iconContainer = document.querySelector('.folder-icon-container');
    if (!iconContainer) return;

    if (type === 'back') {
        iconContainer.innerHTML = `
            <svg class="w-6 h-6 text-accent cursor-pointer hover:text-accent-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
        `;
        iconContainer.style.cursor = 'pointer';
        iconContainer.onclick = showFolders;
    } else {
        iconContainer.innerHTML = `
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
        `;
        iconContainer.style.cursor = 'default';
        iconContainer.onclick = null;
    }
}

/**
 * Load images into the grid (legacy support)
 */
function loadImages() {
    if (currentFolder) {
        openFolder(currentFolder);
    } else {
        showFolders();
    }
}

/**
 * Create an image card element
 * @param {Object} image - Image data { name, url }
 * @param {number} index - Image index for animation delay
 * @returns {HTMLElement} - The image card element
 */
function createImageCard(image, index) {
    const card = document.createElement('div');
    card.className = 'group relative overflow-hidden rounded-lg bg-gray-100 aspect-square cursor-pointer border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-transform duration-150';

    // Stagger animation using CSS custom property (GPU accelerated)
    card.style.cssText = `opacity:0;transform:translateY(10px);animation:fadeIn 0.2s ease forwards;animation-delay:${Math.min(index * 30, 300)}ms;will-change:transform,opacity;`;

    // Full URL for copying
    const fullUrl = image.url.startsWith('http') ? image.url : CONFIG.baseUrl + image.url;

    card.innerHTML = `
        <img data-src="${image.url}" alt="${image.name}" class="w-full h-full object-cover object-top" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23bdcbcc%22><path d=%22M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z%22/></svg>'">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
            <span class="text-white text-xs truncate block" title="${image.name}">${image.name}</span>
        </div>
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="bg-black/50 text-white text-xs px-2 py-1 rounded">
                Click: Copy | Double-click: Zoom
            </div>
        </div>
    `;

    // Lazy load image with IntersectionObserver
    const img = card.querySelector('img');
    lazyLoadImage(img);

    // Clean up will-change after animation completes
    card.addEventListener('animationend', () => {
        card.style.willChange = 'auto';
    }, { once: true });

    // Handle single click (copy) vs double click (zoom)
    let clickTimer = null;

    card.addEventListener('click', (e) => {
        if (clickTimer) {
            // Double click detected - clear timer and open modal
            clearTimeout(clickTimer);
            clickTimer = null;
            openModal(image.url, image.name);
        } else {
            // Start timer for single click
            clickTimer = setTimeout(() => {
                copyToClipboard(fullUrl);
                // Visual feedback - brief flash
                card.style.outline = '3px solid #5167FC';
                setTimeout(() => {
                    card.style.outline = '';
                }, 200);
                clickTimer = null;
            }, 250);
        }
    });

    return card;
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    }
}

/**
 * Show toast notification
 */
function showToast() {
    toastEl.classList.add('toast-show');

    setTimeout(() => {
        toastEl.classList.remove('toast-show');
    }, 2000);
}

/**
 * Setup modal functionality
 */
function setupModal() {
    closeModalBtn.addEventListener('click', closeModal);

    imageModalEl.addEventListener('click', (e) => {
        if (e.target === imageModalEl) {
            closeModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModalEl.style.display !== 'none') {
            closeModal();
        }
    });
}

/**
 * Open image modal
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 */
function openModal(src, alt) {
    modalImageEl.src = src;
    modalImageEl.alt = alt;
    imageModalEl.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Close image modal
 */
function closeModal() {
    imageModalEl.style.display = 'none';
    document.body.style.overflow = '';
}

/**
 * Load images dynamically from a folder path
 * This is a helper function for server-side integration
 * @param {string} folderPath - Path to the folder
 * @param {Array} imageFiles - Array of image filenames
 */
function loadFolder(folderPath, imageFiles) {
    CONFIG.folderName = folderPath.split('/').pop() || folderPath;
    CONFIG.images = imageFiles.map(file => ({
        name: file,
        url: `${folderPath}/${file}`
    }));

    // Clear existing grid
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    // Reload images
    loadImages();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    init();
});

// Export functions for external use
window.DashboardViewer = {
    loadFolder,
    loadImages,
    copyToClipboard,
    CONFIG
};
