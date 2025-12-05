import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const habits = [
    {
      emoji: "💧",
      title: "Пить воду",
      description: "Начните день со стакана воды",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-400"
    },
    {
      emoji: "🥗",
      title: "Есть овощи",
      description: "Добавьте овощи в каждый приём пищи",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-400"
    },
    {
      emoji: "🧠",
      title: "Есть осознанно",
      description: "Сосредоточьтесь на процессе еды",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container max-w-6xl mx-auto px-4 pt-12 pb-20">
        {/* Logo */}
        <div className="flex items-center justify-center mb-16 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-2xl shadow-lg">
              <Icon name="Leaf" className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="ml-4 text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            NutriGuide
          </h1>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Здоровое питание начинается<br />
            с одного простого шага
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите одну привычку и начните менять свою жизнь прямо сейчас
          </p>
        </div>

        {/* Habit Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {habits.map((habit, index) => (
            <Card
              key={index}
              className={`${habit.bgColor} ${habit.borderColor} ${habit.hoverColor} border-2 p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{habit.emoji}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {habit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {habit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Button
            size="lg"
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Начать бесплатно
            <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Без кредитной карты • Отмена в любой момент
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <img
                src="https://cdn.poehali.dev/projects/e0cea32b-4952-4af1-bec3-9ba88ba9c5c5/files/1c45f174-0f8a-4e44-a8fd-1284545dd255.jpg"
                alt="NutriGuide App Interface"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            {
              icon: "Target",
              title: "Фокус на одной привычке",
              description: "Не перегружайте себя — начните с малого"
            },
            {
              icon: "TrendingUp",
              title: "Отслеживайте прогресс",
              description: "Визуализируйте свои достижения каждый день"
            },
            {
              icon: "Award",
              title: "Достигайте целей",
              description: "Превратите привычку в образ жизни за 21 день"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${1.1 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-4">
                <Icon name={feature.icon} className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;