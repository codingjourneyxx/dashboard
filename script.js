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
            name: 'Creative Portfolio & Digital Agency WordPress Elementor Theme',
            images: [
                { name: '1.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/1.png' },
                { name: '2.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/2.png' },
                { name: '3.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/3.png' },
                { name: '4.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/4.png' },
                { name: '5.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/5.png' },
                { name: '6.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/6.png' },
                { name: '7.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/7.png' },
                { name: '8.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/8.png' },
                { name: '9.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/9.png' },
                { name: '10.png', url: 'Creative Portfolio & Digital Agency WordPress Elementor Theme/10.png' },
            ]
        },
        {
            name: 'Axistudio - Branding & Creative Studio Elementor Template Kit',
            zip: { name: 'Branding_Creative_Studio.zip', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/Branding_Creative_Studio.zip' },
            images: [
                { name: '1.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/1.png' },
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
            zip: { name: 'nexta-business-consulting.zip', url: 'Business Consulting Wordpress Theme/nexta-business-consulting-wordpress-theme-2025-11-23-12-40-35-utc.zip' },
            images: [
                { name: '1.jpg', url: 'Business Consulting Wordpress Theme/1.jpg' },
                { name: '2.jpg', url: 'Business Consulting Wordpress Theme/2.jpg' },
                { name: '3.jpg', url: 'Business Consulting Wordpress Theme/3.jpg' },
                { name: '4.jpg', url: 'Business Consulting Wordpress Theme/4.jpg' },
                { name: '5.jpg', url: 'Business Consulting Wordpress Theme/5.jpg' },
                { name: '6.jpg', url: 'Business Consulting Wordpress Theme/6.jpg' },
                { name: '7.jpg', url: 'Business Consulting Wordpress Theme/7.jpg' },
            ]
        },
        {
            name: 'Creastic – Creative Digital Agency Elementor Template',
            zip: { name: 'Creative_Digital_Agency_Template.zip', url: 'Creastic – Creative Digital Agency Elementor Template/Creative_Digital_Agency_Template.zip' },
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
            zip: { name: 'Accounting & Management Consulting Theme.zip', url: 'Execor – Accounting & Management Consulting/Accounting & Management Consulting Theme.zip' },
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
            zip: { name: 'Advisors_&_Business_Consulting.zip', url: 'Finovate/Advisors_&_Business_Consulting.zip' },
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
            zip: { name: 'Real_Estate_WordPress_Theme.zip', url: 'Homirx – Real Estate WordPress Theme/Real_Estate_WordPress_Theme.zip' },
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
            zip: { name: 'Fashion_Clothing_Ecommerce_Shop.zip', url: 'innovecouture/Fashion_Clothing_Ecommerce_Shop.zip' },
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
            zip: { name: 'minterio.zip', url: 'Interior Design WordPress Theme/minterio.zip' },
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
            zip: { name: 'itactics.zip', url: 'itactics/itactics.zip' },
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
            name: 'MaxReach - SEO & Digital Agency',
            subfolders: [
                {
                    name: 'Style 1',
                    zip: { name: 'maxreach.zip', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s1/maxreach.zip' },
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
                    name: 'Style 2',
                    zip: { name: 'maxreach.zip', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s2/maxreach.zip' },
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
                    name: 'Style 3',
                    zip: { name: 'maxreach.zip', url: 'MaxReach - SEO & Digital Agency WordPress Theme/s3/maxreach.zip' },
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
            ]
        },
        {
            name: 'Most – Creative Agency and Portfolio Theme',
            zip: { name: 'Creative_Agency_and_Portfolio_Theme.zip', url: 'Most – Creative Agency and Portfolio Theme/Creative_Agency_and_Portfolio_Theme.zip' },
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
            name: 'Mouno - Creative Digital Agency',
            zip: { name: 'mouno.zip', url: 'Mouno - Creative Digital Agency WordPress Theme/mouno.zip' },
            subfolders: [
                {
                    name: 'Style 1',
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
                    name: 'Style 2',
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
                    name: 'Style 3',
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
                    name: 'Style 4',
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
                    name: 'Style 5',
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
            ]
        },
        {
            name: 'Ingenioso',
            subfolders: [
                {
                    name: 'Style 1',
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
                    name: 'Style 2',
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
                    name: 'Style 3',
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
                    name: 'Style 4',
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
                    name: 'Style 5',
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
            ]
        },
        {
            name: 'Newspaper',
            zip: { name: 'the-newspaper.zip', url: 'Newspaper/the-newspaper.zip' },
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
            zip: { name: 'SEO_Digital_Marketing_WP_Theme.zip', url: 'numerique/SEO_Digital_Marketing_WP_Theme.zip' },
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
            zip: { name: 'Portfolio_Creative_Agency_Freelancer_WordPress_Theme.zip', url: 'Pixelpiernyc - Creative Agency Portfolio Freelance/Portfolio_Creative_Agency_Freelancer_WordPress_Theme.zip' },
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
            zip: { name: 'rentic.zip', url: 'Rentic/rentic.zip' },
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
            name: 'Tecnologia',
            subfolders: [
                {
                    name: 'Style 1',
                    zip: { name: 'IT_SAAS_Software_Tech_WP_Theme.zip', url: 'Tecnologia/s1/IT_SAAS_Software_Tech_WP_Theme.zip' },
                    images: [
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
                    name: 'Style 2',
                    zip: { name: 'IT_SAAS_Software_Tech_WP_Theme.zip', url: 'Tecnologia/s2/IT_SAAS_Software_Tech_WP_Theme.zip' },
                    images: [
                        { name: '1.png', url: 'Tecnologia/s2/1.png' },
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
let parentFolder = null; // Track parent folder for nested navigation
let lenis = null; // Lenis smooth scroll instance


/**
 * Initialize the dashboard
 */
function init() {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Set title
    folderNameEl.textContent = CONFIG.title;

    // Show folders initially
    showFolders();

    // Setup modal close functionality
    setupModal();
}

/**
 * Scroll to top after content changes
 */
function scrollToTop() {
    if (lenis) {
        lenis.scrollTo(0, { immediate: true });
    } else {
        window.scrollTo(0, 0);
    }
}

/**
 * Show folders view
 */
function showFolders() {
    currentFolder = null;
    parentFolder = null;
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    // Reset to grid view
    imageGridEl.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4';

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

    scrollToTop();
}

/**
 * Show subfolders view for a parent folder
 */
function showSubfolders(folder) {
    parentFolder = folder;
    currentFolder = null;
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    // Reset to grid view
    imageGridEl.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4';

    folderNameEl.textContent = folder.name;
    const zipCount = folder.zip ? 1 : 0;
    const totalItems = folder.subfolders.length + zipCount;
    imageCountEl.textContent = `${folder.subfolders.length} style${folder.subfolders.length !== 1 ? 's' : ''}${folder.zip ? ' + zip' : ''}`;

    // Update header icon to back arrow
    updateHeaderIcon('back');

    // Use DocumentFragment for batch DOM insertion
    const fragment = document.createDocumentFragment();

    // Add zip card first if exists
    if (folder.zip) {
        const zipCard = createZipCard(folder.zip);
        fragment.appendChild(zipCard);
    }

    folder.subfolders.forEach((subfolder, index) => {
        const card = createFolderCard(subfolder, index, folder);
        fragment.appendChild(card);
    });
    imageGridEl.appendChild(fragment);

    scrollToTop();
}

/**
 * Create a zip file card element
 */
function createZipCard(zip) {
    const card = document.createElement('div');
    card.className = 'relative overflow-hidden rounded-lg bg-accent/10 aspect-square cursor-pointer border-2 border-accent border-dashed flex flex-col items-center justify-center p-4 hover:bg-accent/20';

    const fullUrl = zip.url.startsWith('http') ? zip.url : CONFIG.baseUrl + zip.url;

    card.innerHTML = `
        <div class="mb-3">
            <svg class="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            </svg>
        </div>
        <span class="text-sm font-medium text-accent text-center">${zip.name}</span>
        <span class="text-xs text-gray-500 mt-2">Click to copy URL</span>
    `;

    card.addEventListener('click', () => {
        copyToClipboard(fullUrl);
        card.style.outline = '3px solid #5167FC';
        setTimeout(() => card.style.outline = '', 200);
    });

    return card;
}

/**
 * Create a folder card element
 */
function createFolderCard(folder, index, parent = null) {
    const card = document.createElement('div');
    card.className = 'relative overflow-hidden rounded-lg bg-gray-50 aspect-square cursor-pointer border border-gray-200 flex flex-col items-center justify-center p-4 hover:bg-gray-100';

    // Check if folder has subfolders or images
    const hasSubfolders = folder.subfolders && folder.subfolders.length > 0;
    const itemCount = hasSubfolders ? folder.subfolders.length : (folder.images ? folder.images.length : 0);
    const itemLabel = hasSubfolders ? `${itemCount} style${itemCount !== 1 ? 's' : ''}` : `${itemCount} image${itemCount !== 1 ? 's' : ''}`;

    card.innerHTML = `
        <div class="mb-3">
            <svg class="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
        </div>
        <span class="text-sm font-medium text-gray-700 text-center line-clamp-2 px-2">${folder.name}</span>
        <span class="text-xs text-accent mt-2">${itemLabel}</span>
    `;

    card.addEventListener('click', () => {
        if (hasSubfolders) {
            showSubfolders(folder);
        } else {
            openFolder(folder, parent);
        }
    });

    return card;
}

/**
 * Open a folder and show its images as URL list
 */
function openFolder(folder, parent = null) {
    currentFolder = folder;
    if (parent) {
        parentFolder = parent;
    }
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    // Show parent name + subfolder name if nested
    const displayName = parentFolder ? `${parentFolder.name} - ${folder.name}` : folder.name;
    folderNameEl.textContent = displayName;
    const zipLabel = folder.zip ? ' + zip' : '';
    imageCountEl.textContent = `${folder.images.length} image${folder.images.length !== 1 ? 's' : ''}${zipLabel}`;

    // Update header icon to back arrow
    updateHeaderIcon('back');

    if (folder.images.length === 0 && !folder.zip) {
        emptyStateEl.classList.remove('hidden');
        return;
    }

    // Switch to list view
    imageGridEl.className = 'flex flex-col gap-2';

    // Use DocumentFragment for batch DOM insertion (better performance)
    const fragment = document.createDocumentFragment();

    // Add zip item first if exists
    if (folder.zip) {
        const zipItem = createZipListItem(folder.zip);
        fragment.appendChild(zipItem);
    }

    folder.images.forEach((image, index) => {
        const item = createImageListItem(image, index);
        fragment.appendChild(item);
    });
    imageGridEl.appendChild(fragment);

    scrollToTop();
}

/**
 * Navigate back based on current state
 */
function navigateBack() {
    if (currentFolder && parentFolder) {
        // In subfolder images view -> go back to subfolders
        showSubfolders(parentFolder);
    } else if (parentFolder) {
        // In subfolders view -> go back to main folders
        showFolders();
    } else {
        // In regular folder images view -> go back to main folders
        showFolders();
    }
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
        iconContainer.onclick = navigateBack;
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
 * Create an image list item element
 * @param {Object} image - Image data { name, url }
 * @param {number} index - Image index
 * @returns {HTMLElement} - The list item element
 */
function createImageListItem(image, index) {
    const item = document.createElement('div');
    item.className = 'flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100';

    // Full URL for copying (encode properly for valid URL)
    const rawUrl = image.url.startsWith('http') ? image.url : CONFIG.baseUrl + image.url;
    // Clean URL for display (decode %20 to spaces for readability)
    const displayUrl = decodeURIComponent(rawUrl);
    // Properly encoded URL for copying (works in all browsers)
    const copyUrl = encodeURI(decodeURIComponent(rawUrl));

    item.innerHTML = `
        <div class="flex-1 min-w-0 cursor-pointer" title="Click to view image">
            <p class="text-sm font-medium text-gray-700 truncate">${image.name}</p>
            <p class="text-xs text-gray-500 truncate">${displayUrl}</p>
        </div>
        <button class="copy-btn flex-shrink-0 px-3 py-1.5 bg-accent text-white text-xs rounded hover:bg-accent-dark">
            Copy URL
        </button>
    `;

    // Click on URL text opens modal
    const urlArea = item.querySelector('.flex-1');
    urlArea.addEventListener('click', () => {
        openModal(image.url, image.name);
    });

    // Copy button
    const copyBtn = item.querySelector('.copy-btn');
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(copyUrl);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy URL', 1000);
    });

    return item;
}

/**
 * Create a zip list item element
 * @param {Object} zip - Zip data { name, url }
 * @returns {HTMLElement} - The list item element
 */
function createZipListItem(zip) {
    const item = document.createElement('div');
    item.className = 'flex items-center gap-3 p-3 bg-accent/10 rounded-lg border-2 border-accent border-dashed';

    const rawUrl = zip.url.startsWith('http') ? zip.url : CONFIG.baseUrl + zip.url;
    const displayUrl = decodeURIComponent(rawUrl);
    const copyUrl = encodeURI(decodeURIComponent(rawUrl));

    item.innerHTML = `
        <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
        <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-accent">${zip.name}</p>
            <p class="text-xs text-gray-500 truncate">${displayUrl}</p>
        </div>
        <button class="copy-btn flex-shrink-0 px-3 py-1.5 bg-accent text-white text-xs rounded hover:bg-accent-dark">
            Copy URL
        </button>
    `;

    // Copy button
    const copyBtn = item.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
        copyToClipboard(copyUrl);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy URL', 1000);
    });

    return item;
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
