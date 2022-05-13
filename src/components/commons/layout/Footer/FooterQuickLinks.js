import Links from "./QuickLinks/Links";
import Link from "./QuickLinks/Link";
import Separator from "./QuickLinks/Separator";

function FooterQuickLinks() {
  return (
    <Links>
      <Link name="À propos de l'Insee" href="#" />
      <Separator />
      <Link name="Presse" href="#" />
      <Separator />
      <Link name="Plan du site" href="#" />
      <Separator />
      <Link name="Accessibilité" href="#" />
      <Separator />
      <Link name="Mentions légales" href="#" />
      <Separator />
      <Link name="Homologation" href="#" />
      <Separator />
      <Link name="Recherche commune" href="#" />
    </Links>
  );
}

export default FooterQuickLinks;
