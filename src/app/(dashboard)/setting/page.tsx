import React, { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewForm from "@/components/forms/OverviewForm";
import SocialLinks from "@/components/forms/SocialLinks";
import Teams from "@/components/forms/Teams";

interface SettingPageProps {}

const SettingPage: FC<SettingPageProps> = () => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-5">Setting</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialLinks />
        </TabsContent>
        <TabsContent value="teams">
          <Teams />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingPage;
