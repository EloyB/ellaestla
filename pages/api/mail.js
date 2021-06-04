import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp-auth.mailprotect.be",
  port: 2525,
  secure: false,
  auth: {
    user: "info@ella-est-la.be",
    pass: "Ikbeneenvlieg123",
  },
});

export default (req, res) => {
  var mail =
    "Email: " +
    req.body.email +
    "<br/> Telefoon: " +
    req.body.telefoon +
    "<br/> Naam: " +
    req.body.naam +
    "<br/><br/> Bericht: " +
    req.body.bericht;
  transporter.sendMail({
    from: "info@ella-est-la.be",
    to: "info@ella-est-la.be",
    subject: "Aanvraag website",
    html: mail,
  });
  res.json({ status: 200 });
};
