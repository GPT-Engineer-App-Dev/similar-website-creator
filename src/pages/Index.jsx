import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" py={4} borderBottom="1px solid #e2e8f0">
        <HStack spacing={8}>
          <Image src="/logo.png" alt="Logo" boxSize="50px" />
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Services</Text>
            <Text>Contact</Text>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="User" icon={<FaUserCircle />} />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8}>
          {/* Featured Article */}
          <Box w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h2" size="lg" mb={4}>
              Featured Article
            </Heading>
            <Image src="/featured-article.jpg" alt="Featured Article" mb={4} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>

          {/* Recent Articles */}
          <Box w="full">
            <Heading as="h3" size="md" mb={4}>
              Recent Articles
            </Heading>
            <VStack spacing={4}>
              <Box p={4} borderWidth="1px" borderRadius="lg" w="full">
                <Text fontWeight="bold">Article 1</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="lg" w="full">
                <Text fontWeight="bold">Article 2</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="lg" w="full">
                <Text fontWeight="bold">Article 3</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;